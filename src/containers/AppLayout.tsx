import { Outlet, useNavigation } from 'react-router-dom'
import Loading from '../components/Loading'
import Header from './Header'

const AppLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <div className="container mx-auto flex h-dvh flex-col bg-stone-900 px-8 text-stone-100">
      {isLoading && <Loading />}
      <Header />
      <main className="grow">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
