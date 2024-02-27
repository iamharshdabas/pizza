import { Outlet, useNavigation } from 'react-router-dom'
import Loading from '../components/Loading'
import Header from './Header'

const AppLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <div className="container mx-auto flex h-dvh flex-col px-8">
      {isLoading && <Loading />}
      <Header />
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
