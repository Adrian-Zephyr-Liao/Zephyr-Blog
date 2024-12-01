import { auth, signIn, signOut } from '@/auth'
import styles from './index.module.css'

export default async function SignIn() {
  const session = await auth()

  if (session?.user) {
    return (
      <>
        <div className={styles.a}>
          用户信息：
          {JSON.stringify(session.user)}
        </div>
        <div>
          <form
            action={async () => {
              'use server'
              await signOut()
            }}
            className="w-full"
          >
            <button>退出登录</button>
          </form>
        </div>
      </>
    )
  }
  else {
    return (
      <form
        action={async () => {
          'use server'
          await signIn()
        }}
      >
        <button type="submit">点击登录 GitHub</button>
      </form>
    )
  }
}
