class NeuralNetwork {
  constructor(a, b, c) {
    this.input_nodes = a
    this.hidden_nodes = b
    this.output_nodes = c
    this.createModel()
  }

  // Documentation: https://www.tensorflow.org/js
  createModel() {
    this.model = tf.sequential()

    const hidden = tf.layers.dense({
      units: this.hidden_nodes,
      inputShape: [this.input_nodes],
      activation: 'sigmoid'
    })
    this.model.add(hidden)

    const output = tf.layers.dense({
      units: this.output_nodes,
      activation: 'softmax'
    })
    this.model.add(output)
  }

  // Convert inputs to tensor and return outputs
  predict(inputs) {
    const x = tf.tensor2d([inputs])
    const y = this.model.predict(x)
    const outputs = y.dataSync()
    return outputs
  }
}
