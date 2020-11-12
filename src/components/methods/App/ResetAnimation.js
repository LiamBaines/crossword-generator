async function ResetAnimation() {
  return new Promise((resolve, reject) => {
    this.setState(() => {
      return {
        animation: 'none'
      }
    })
    resolve()
  })
}

export default ResetAnimation;