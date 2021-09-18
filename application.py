################################################################

from flask import Flask, json, render_template, request
import boto3
import time

################################################################

application = Flask(__name__)
s3 = boto3.resource('s3')

data_log = []
name = ''

################################################################

@application.route('/')
def intro():
    return render_template("1_Intro.html")

################################################################

@application.route('/2_DraggableImages')
def draggable():
    return render_template("2_DraggableImages.html")

################################################################

@application.route('/3_Finish')
def finish():
    global data_log, name

    try:
        if len(data_log) > 0:
            s3.Bucket('test-flask-server').put_object(Key=f'{name}_{int(time.time()*1000)}.json', Body=json.dumps({ "log": data_log }))
            data_log = []
    except:
        return json.dumps({ 'message': 's3.Bucket' })


    return render_template("3_Finish.html")

################################################################

@application.route('/log', methods=['POST'])
def log():
    global data_log, name

    try:
        data_json = request.form['data']
        name = request.form['name']
    except:
        return json.dumps({ 'message': 'request.form' })

    try:
        data_dict = json.loads(data_json)
    except:
        return json.dumps({ 'message': 'json.loads' })

    try:
        data_log.append(data_dict)
        if len(data_log) > 1000:
            s3.Bucket('test-flask-server').put_object(Key=f'{name}_{int(time.time()*1000)}.json', Body=json.dumps({ "log": data_log }))
            data_log = []
    except:
        return json.dumps({ 'message': 's3.Bucket' })

    return json.dumps({ 'message': 'success' })

################################################################

# run the app.
if __name__ == "__main__":
    application.debug = True
    application.run()