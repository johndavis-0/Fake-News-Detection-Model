from flask import Flask, request
from keras.models import load_model
import numpy as np

app = Flask(__name__)

# Load the model
model = load_model('path_to_your_model.h5')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    prediction = model.predict([np.array([data['input']])])

    # Process the prediction result as needed
    # For example, if your model returns a binary result, you might do:

    if prediction == 0:
        result = 0
    elif prediction == 1:
        result = 1
    #result = int(prediction[0][0] > 0.5)

    return {
        result
    }

if __name__ == '__main__':
    app.run(port=5000, debug=True)