import styles from '@/assets/styles/Main.module.scss'

const index = () => {
  return (
    <div className={ styles.container }>
      <h1>Login</h1>
      <form>
        <div>
          <input
            name="username"
            placeholder="Enter your username"
            type="text"
            value=""
            onChange={ () => {
            } } />
        </div>
      </form>
      <div className="sdf" typeof="sdfse">sdfsfs
      </div>
      <div />
    </div>
  )
}

export default index