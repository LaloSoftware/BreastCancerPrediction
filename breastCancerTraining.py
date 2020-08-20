import numpy as np
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split 
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix, classification_report, accuracy_score
import joblib

df = pd.read_csv("data.csv")

df = df.dropna(axis=1)

labelencoder_Y = LabelEncoder()
df.iloc[:,1] = labelencoder_Y.fit_transform(df.iloc[:,1].values)

X = df.iloc[:,2:31] #valores de todas las columnas excepto las del id y los valores del diagnostico
Y = df.iloc[:,1] #Valores de diagnostico
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.25, random_state=0)

sc = StandardScaler()
X_train = sc.fit_transform(X_train)
X_test = sc.fit_transform(X_test)

def training(X_train, Y_train):
    forest = RandomForestClassifier(n_estimators=10, criterion="entropy", random_state=0)
    forest.fit(X_train, Y_train)
    return forest

model = training(X_train, Y_train)

print(model.score(X_train, Y_train))

cm = confusion_matrix(Y_test, model.predict(X_test))
print(cm)

TP = cm[0][0]
TN = cm[1][1]
FN = cm[1][0]
FP = cm[0][1]
print("Accurancy = ", (TP + TN)/(TP+TN+FN+FP))

print()
print( classification_report(Y_test, model.predict(X_test)))
print()
print( accuracy_score(Y_test, model.predict(X_test)) )
print()

for i in range(3):
    print()

pred = model.predict(X_test)
print(pred)
print()


joblib.dump(model, 'modelo_entrenado.pkl')