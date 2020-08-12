from flask import Flask, jsonify
import joblib


app = Flask(__name__)

model = joblib.load("../modelo_entrenado.pkl")
print(model)

@app.route('/ping')
def ping():
    return jsonify({"message": 'Conected'})

if __name__ == '__main__':
    app.run(debug=True, port=4000)