from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy 

# declare constants
HOST = '0.0.0.0'
PORT = 5000

# initialize flask application
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:215730Aw@localhost/questions'

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

class Class(db.Model):
    __tablename__='classes'
    id=db.Column(db.Integer, primary_key=True)
    class_name=db.Column(db.String(255), nullable=False)
    students=db.relationship('students', backref='class', lazy=True)
    
    def __init__(self, class_name):
        self.class_name=class_name

class Teacher(db.Model):
    __tablename__='teachers'
    id=db.Column(db.Integer, primary_key=True)
    # teacher_name=db.Column(db.String(255), nullable=False)
    # password=db.Column(db.String(255), nullable=False)
    school=db.Column(db.Integer, db.ForeignKey('schools.id'), nullable=False)
    classes=db.relationship('classes', backref='teacher', lazy=True)
    
    # def __init__(self, teacher_name,password):
    #     self.teacher_name=teacher_name
    #     self.password=password

class School(db.Model):
    __tablename__='schools'
    id=db.Column(db.Integer, primary_key=True)
    school_name=db.Column(db.String(255), nullable=False)
    teachers=db.relationship('teachers', backref='school', lazy=True)
    students=db.relationship('students', backref='school', lazy=True)
    
    def __init__(self, school_name):
        self.school_name=school_name
class Admin(db.Model):
    __tablename__='admins'
    id=db.Column(db.Integer, primary_key=True)
    # admin_name=db.Column(db.String(255), nullable=False)
    # password=db.Column(db.String(255), nullable=False)
    
    # def __init__(self, admin_name,password):
    #     self.admin_name=admin_name
    #     self.password=password

class User(db.Model):
    __tablename__='users'
    id=db.Column(db.Integer, primary_key=True)
    user_type=db.Column(db.String(255), nullable=False)
    username=db.Column(db.String(255), nullable=False)  
    password=db.Column(db.String(255), nullable=False)
    def __init__(self, admin_name,password,user_type):
        self.user_name=admin_name
        self.password=password
        self.user_type=user_type


@app.route('/api/user_auth', methods=['GET'])
def authenticate_user(username, password):
    user = User.query.filter_by(username=username).first()
    if user and user.password == password:
        data={'output':user.user_type}
    else:
        data={'output':'invalid'}
    return jsonify(data)   

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
