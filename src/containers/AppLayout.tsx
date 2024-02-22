import { Outlet, useNavigation } from 'react-router-dom'
import Header from './Header'
import Loading from '../components/Loading'

const AppLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  console.log(navigation.state)

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
