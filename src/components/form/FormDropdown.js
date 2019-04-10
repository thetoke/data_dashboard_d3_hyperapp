import { h } from "hyperapp";


const FormDropdown = ({ text, items, onchange }, actions) => {
  const close = (e) => {
    document.querySelectorAll('.dropdown.is-active').forEach(d => {
      if (!d.contains(e.target)) {
        d.classList.remove('is-active')
      }
    })
  }

  const oncreate = () => {
    document.addEventListener('click', close)
  }

  const ondestroy = () => {
    document.removeEventListener('click', close)
  }

  const toggle = (e) => {
    e.currentTarget.closest('.dropdown').classList.toggle('is-active')
  }

  const select = (e) => {
    const selected = e.currentTarget
    selected.parentElement.childNodes.forEach(c => c.classList.remove('is-active'))
    selected.classList.add('is-active')
    const text = selected.closest('.dropdown').querySelector('.text')
    text.innerText = selected.innerText
    //onchange(selected.innerText)
    toggle(e)
  }

  return (
    <div class="dropdown" oncreate={oncreate} ondestroy={ondestroy}>
      <div class="dropdown-trigger">
        <button class="dropdown-button" aria-haspopup="true" aria-controls="dropdown-menu-3" onclick={toggle}>
          <span class="text dropdown-text">{text}</span>
          <span class="dropdown-icon is-small">
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          {items.map((e, i) => (
            <a key={i} class="dropdown-item" onclick={select}>
              {e}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

// view using above component
const view = (state, actions) => {
  return (
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle">
            {state.items.length ?
            (
              <FormDropdown text="fruit" items={state.items} onchange={s => actions.select({ selected: s })} />
            ) : null}
          </h2>
          {state.selected ?
          (
            <p>
              <i>Selected: {state.selected}</i>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}

// app, state, actions
const state = {
  items: ['apple', 'orange', 'banana']
}

const actions = {
  select: ({ selected }) => () => {
    return {
      selected
    }
  }
}

export default FormDropdown
