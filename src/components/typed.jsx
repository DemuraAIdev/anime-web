'use client'
import React from 'react'
import Typed from 'typed.js'
export default function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      loop: true,
      smartBackspace: true,
      fadeOut: true,
      cursorChar: '_',
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <>
      <ul id="bios" className="hidden">
        <li>Best Anime Alltime.</li>
        <li>Best Romance Anime.</li>
        <li>Best Action Anime.</li>
        <li>Best Adventure Anime.</li>
        <li>Best Fantasy Anime.</li>
        <li>Best Thriller Anime.</li>
        <li>Best Horror Anime.</li>
        <li>Best Comedy Anime.</li>
        <li>Best Drama Anime.</li>
        <li>Best Mystery Anime.</li>
        <li>Best Psychological Anime.</li>
        <li>Best Supernatural Anime.</li>
        <li>Best Sci-Fi Anime.</li>
        <li>Best Mecha Anime.</li>
        <li>Best Slice of Life Anime.</li>
        <li>Best Sports Anime.</li>
        <li>Best Music Anime.</li>
        <li>Best School Anime.</li>
        <li>Search it.</li>
      </ul>
      <span ref={el} className="select-none text-lg text-neutral-900 dark:text-neutral-200" />
    </>
  )
}
