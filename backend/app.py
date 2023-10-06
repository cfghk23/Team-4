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
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
    
    def __init__(self, question, answer):
        self.question=question
        self.answer=answer
class Course(db.Model):
    __tablename__='courses'
    id=db.Column(db.Integer, primary_key=True)
    course_name=db.Column(db.String(255), nullable=False)
    questions=db.relationship('Question', backref='course', lazy=True)
    
    def __init__(self, course_name, questions):
        self.course_name=course_name
        self.questions=questions
class RegisteredCourse(db.Model):
    __tablename__='registered_courses'
    id=db.Column(db.Integer, primary_key=True)
    course_id=db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
    student_id=db.Column(db.Integer,db.ForeignKey('students.id'),nullable=False)
    score=db.Column(db.Integer,nullable=False)

    def __init__(self, score):
        self.score=score
class Student(db.Model):
    __tablename__='students'
    id=db.Column(db.Integer, primary_key=True)
    student_name=db.Column(db.String(255), nullable=False)
    password=db.Column(db.String(255), nullable=False)
    age_group=db.Column(db.String(255), nullable=False)
    courses=db.relationship('registered_courses', backref='student', lazy=True)
    
    def __init__(self, student_name,password, age_group):
        self.student_name=student_name
        self.password=password
        self.age_group=age_group



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
