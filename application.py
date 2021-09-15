from flask import Flask, json, render_template, request
import boto3
import time

application = Flask(__name__)

s3 = boto3.resource('s3')
# data = json.dumps({ "key": "value" })

@application.route('/')
def intro():
    return render_template("1_Intro.html")

@application.route('/2_DraggableImages')
def draggable():
    return render_template("2_DraggableImages.html")

@application.route('/3_Finish')
def finish():
    return render_template("3_Finish.html")

@application.route('/log', methods=['POST'])
def log():
    try:
        data_json = request.form['data']
    except:
        return json.dumps({ 'message': 'request.form' })

    try:
        data_dict = json.loads(data_json)
    except:
        return json.dumps({ 'message': 'json.loads' })

    try:
        s3.Bucket('test-flask-server').put_object(Key=f'{int(time.time()*1000)}.json', Body=json.dumps(data_dict))
    except:
        return json.dumps({ 'message': 's3.Bucket' })

    return json.dumps({ 'message': 'success' })

# run the app.
if __name__ == "__main__":
    application.debug = True
    application.run()