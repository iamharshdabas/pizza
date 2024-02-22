import { Outlet, useNavigation } from 'react-router-dom'
import Loading from '../components/Loading'
import Header from './Header'

const AppLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <>
      {isLoading && <Loading />}
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
