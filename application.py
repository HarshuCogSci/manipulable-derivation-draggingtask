from flask import Flask, json
import boto3
application = Flask(__name__)

s3 = boto3.resource('s3')
data = json.dumps({ "key": "value" })

@application.route('/')
def hello_world():
    s3.Bucket('test-flask-server').put_object(Key='data.json', Body=data)
    return 'hello world'