from flask import render_template
from flask import request
from flask import Flask
from pi import PI


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route("/search")
def search_patter():
    
    pattern = request.args.get("pattern", '')

    print(f'pattern we are looking for is {pattern}')

    pi = PI(pattern)

    res = pi.main()

    print(res)

    return res
