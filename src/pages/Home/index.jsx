import RegisterForm from '../../components/RegisterForm'

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center gap-6 py-44">
      <h1 className="text-6xl text-custom-green-300">HRnet</h1>
      <RegisterForm />
    </main>
  )
}
