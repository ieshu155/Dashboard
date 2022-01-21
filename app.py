from flask import Flask, render_template, request, session
import os
from datetime import timedelta
import datetime as dt

from flask_session import Session

MST_timezone = dt.timezone(dt.timedelta(hours=-7))
app = Flask(__name__)



@app.route("/")
def home():

    return render_template("index.html", )


@app.route("/test", methods=["POST", "GET"])
def trust_response():
    print(request.form)

    return render_template("index.html", )

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
