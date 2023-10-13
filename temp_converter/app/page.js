import Image from 'next/image'

function AboutPage() {
  return (
    <>
      <div>
        <article id="article1">
          Enter 1st Temp: <input name='userInput1' />
        </article>
      </div>
    </>
  )
}

export default function Page() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

  }
  return <AboutPage />
}


