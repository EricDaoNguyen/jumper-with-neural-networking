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
    const x = tf.tensor2d([inputs])
    const y = this.model.predict(x)
    const outputs = y.dataSync()
    return outputs
  }

  // Copies architecture with the weights
  copy() {
    const modelCopy = this.createModel()
    const weights = this.model.getWeights()
    modelCopy.setWeights(weights)
    return new NeuralNetwork(modelCopy, this.input_nodes, this.hidden_nodes, this.output_nodes)
  }
}
