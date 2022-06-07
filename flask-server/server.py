from flask import Flask, request
import pickle
import numpy as np

app = Flask(__name__)

# importing the model
with open("model", "rb") as f :
    model = pickle.load(f)


@app.route("/predict_output", methods=["POST"])
def predict_output():
    request_data = request.get_json()
    print(request_data)
    features_X = np.array(request_data).reshape(1,13)
    output = model.predict(features_X)
    print(output[0])
    return {"output":f"{output[0]}" }


if __name__ == "__main__":
    app.run(debug=True)
