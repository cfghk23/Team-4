from flask import Flask, request, jsonify, render_template, url_for, redirect
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy.sql import func

import os

from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate 
from langchain.memory import ConversationBufferWindowMemory 
from langchain.llms import Replicate

# declare constants
HOST = '0.0.0.0'
PORT = 5000

basedir = os.path.abspath(os.path.dirname(__file__))

# initialize flask application
app = Flask(__name__)
CORS(app)  # Enable CORS to allow cross-origin requests

# app.config['SQLALCHEMY_DATABASE_URI'] =\
#         'sqlite:///' + os.path.join(basedir, 'database.db')
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# the values of those depend on your setup
username = 'newuser'
password = 'password'
database = 'your_database'

app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://{username}:{password}@localhost:5432/{database}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # silence the deprecation warning

db = SQLAlchemy(app)

# Define your `Scores` model
class Scores(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    student_id = db.Column(db.Integer)
    subject = db.Column(db.String(100))
    score = db.Column(db.Integer)

    def __repr__(self):
        return f"Scores(student_id={self.student_id}, subject='{self.subject}', score={self.score})"


class Chat:
    def __init__(self, model_name, prompt_template, memory_k=2):
        self.llm = LLMChain(
            llm=Replicate(model=model_name),
            prompt=prompt_template,
            memory=ConversationBufferWindowMemory(k=memory_k),
            llm_kwargs={"max_length": 4096}
        )

    def generate_response(self, sms_input):
        return self.llm.predict(sms_input=sms_input)

# Set up OpenAI API key
with open('openai_api_key.txt') as f:
    lines = f.readlines()

os.environ['REPLICATE_API_TOKEN'] = lines[0]

template = """You are an assistant for students ranging from under primary to upper secondary studying financial concepts to improve their financial literacy. 
Please act as an expert in the financial industry, including personal finance, budgeting, stock market investing, etc.
You will receive queries about financial concepts from people who still lack financial literacy.
After you receive the query, please give answers and advice to the students, helping them understand financial concepts better.
You will receive queries from students in the form of a message, and please reply with this.
SMS: {sms_input}
Assistant:"""

prompt = PromptTemplate(input_variables=["sms_input"], template=template)

chat = Chat(model_name="a16z-infra/llama13b-v2-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5", 
            prompt_template=prompt)


    
# sample hello world page
@app.route('/')
def hello():
    return "<h1>Hello World</h1>"

# sample api endpoint
@app.route('/api/test', methods=['GET', 'POST'])
def test():
    if request.method == 'POST':
        # get parameters from post request
        parameters = request.get_json()
        if 'test' in parameters:
            return jsonify({'value': parameters['test']})
        return jsonify({'error'})
    else:
        return jsonify({'test': 'success'})

@app.route('/api/<int:student_id>', methods=['GET'])
def get_student_results(student_id):
    # Retrieve the student's performance result data based on the student_id
    # and format it as required by ApexCharts
    student_scores = Scores.query.filter_by(student_id=student_id).all()

    subject_names = []
    scores = []

    for score in student_scores:
        subject_names.append(score.subject)
        scores.append(score.score)

    data = {
        'options': {
            'chart': {
                'type': 'bar',
            },
            'xaxis': {
                'categories': subject_names,  # Example subject names
            },
        },
        'series': [
            {
                'name': 'Score',
                'data': scores,  # Example scores
            },
        ],
    }
    return jsonify(data)


# inb_msg = '''I don't know what stock is. Can you explain it to me as a kindergarten student?'''

@app.route('/api/chat', methods=['POST'])
def chat_api():
    if request.method == 'POST':
        data = request.get_json()
        sms_input = data.get('sms_input')
        if sms_input:
            response = chat.generate_response(sms_input=sms_input)
            return jsonify({'response': response})

    return jsonify({'error': 'Invalid request'})
    
if __name__ == '__main__':
    app.run(host=HOST,
            debug=True,
            port=PORT)
