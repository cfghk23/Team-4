from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy 

# declare constants
HOST = '0.0.0.0'
PORT = 5000

# initialize flask application
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:CFG2023@localhost/questions'

db=SQLAlchemy(app)

class Question(db.Model):
    __tablename__='questions'
    id=db.Column(db.Integer, primary_key=True)
    question=db.Column(db.String(255), nullable=False)
    answer=db.Column(db.Boolean, nullable=False)
    
    def __init__(self, question, answer):
        self.question=question
        self.answer=answer

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


if __name__ == '__main__':
    app.run(host=HOST,
            debug=True,
            port=PORT)
