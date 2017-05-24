from bottle import Bottle, route, run, get, post, template, request

app = Bottle()

@app.route('/hello', method="GET")
def hello():
  return "Hello World!"

@app.get('/')
@app.get('/hello/<name>')
def greet(name='Pedro'):
  return template('Hello {{name}}, how are you?', name=name)

@app.post('/param')
def hello_json():
  data = request.json
  param = data['param']
  ret = {"status": "OK", "param": param}
  return ret

run(app, host='127.0.0.1', port=8081, debug=True)
