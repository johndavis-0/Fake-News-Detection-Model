from flask import Flask, request
from flask_cors import cross_origin
from keras.models import load_model

app = Flask(__name__)

# Load the model
model = load_model('bert_4_.keras')

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    data = request.get_json(force=True)
    prediction = 0

    # Process the prediction result as needed
    # For example, if your model returns a binary result, you might do:

    if prediction == 0: return 0;
        
    elif prediction == 1: return 1;

if __name__ == '__main__':
    app.run(port=5000, debug=True)

  