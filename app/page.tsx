import { BlogPosts } from 'app/components/posts'
import { Skills } from 'app/components/skills'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter animate-fade-in">
        My Portfolio
      </h1>
      <p className="mb-4 animate-fade-in-delay opacity-0">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <Skills />
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}