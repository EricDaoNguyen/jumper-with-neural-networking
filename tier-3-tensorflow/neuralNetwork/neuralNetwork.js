// Documentation: https://www.tensorflow.org/js

class NeuralNetwork {
  constructor(a, b, c, d) {
    if(a instanceof tf.Sequential) {
      this.model = a
      this.input_nodes = b
      this.hidden_nodes = c
      this.output_nodes = d
    } else {
      this.input_nodes = a
      this.hidden_nodes = b
      this.output_nodes = c
      this.model = this.createModel()
    }
  }

  createModel() {
    const model = tf.sequential()
    const hidden = tf.layers.dense({
      units: this.hidden_nodes,
      inputShape: [this.input_nodes],
      activation: 'sigmoid'
    })
    model.add(hidden)
    const output = tf.layers.dense({
      units: this.output_nodes,
      activation: 'softmax'
    })
    model.add(output)
    return model
  }

  // Convert inputs to tensor and return outputs
  predict(inputs) {
    // Prevent memory leak
    return tf.tidy(() => {
      const x = tf.tensor2d([inputs])
      const y = this.model.predict(x)
      const outputs = y.dataSync()
      return outputs
    })
  }

  // Copies architecture with the weights
  copy() {
    // Prevent memory leak
    return tf.tidy(() => {
      const modelCopy = this.createModel()
      const weights = this.model.getWeights()
      const weightedCopies = []
      for(let i = 0; i < weights.length; i++) { weightedCopies[i] = weights[i].clone() }
      modelCopy.setWeights(weightedCopies)
      return new NeuralNetwork(modelCopy, this.input_nodes, this.hidden_nodes, this.output_nodes)
    })
  }


  mutate(rate) {
    // Prevent memory leak
    tf.tidy(() => {
      const weights = this.model.getWeights()
      const mutatedWeights = []
      for(let i = 0; i < weights.length; i++ ) {
        let tensor = weights[i]
        let shape = weights[i].shape
        let values = tensor.dataSync().slice()
        for (let j = 0; j < values.length; j++) {
          if(random(1) < rate) {
            let w = values[j]
            values[j] = w + randomGaussian()
          }
        }
        let newTensor = tf.tensor(values, shape)
        mutatedWeights[i] = newTensor
      }
      this.model.setWeights(mutatedWeights)
    })
  }

  // Prevent memory leak
  dispose() { this.model.dispose() }
}
