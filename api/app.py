from flask import Flask, jsonify, request
import joblib
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()

app = Flask(__name__)

model = joblib.load("../modelo_entrenado.pkl")
print(model)

@app.route('/ping')
def ping():
    return jsonify({"message": 'Conected'})

@app.route('/breast_cancer_prediction', methods=["POST"])
def breast_cancer_prediction():
    ddp = request.json
    arr = sc.fit_transform([ddp["datos"]])
    pred = model.predict(arr)
    req = ""
    if(pred[0] == 1):
        req = "Maligno"
    else:
        req = "Benigno"
    return jsonify({"request": req})

if __name__ == '__main__':
    app.run(debug=True, port=4000)