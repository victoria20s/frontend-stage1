import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name:'', email:'', subject:'', message:'' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name) newErrors.name = 'Full name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.subject) newErrors.subject = 'Subject is required'
    if (!formData.message || formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters'
    return newErrors
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true)
      setFormData({ name:'', email:'', subject:'', message:'' })
    } else {
      setErrors(validationErrors)
      setSuccess(false)
    }
  }

  return (
    <main className="page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} data-testid="test-contact-name" aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <p id="name-error" data-testid="test-contact-error-name" className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" value={formData.email} onChange={handleChange} data-testid="test-contact-email" aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <p id="email-error" data-testid="test-contact-error-email" className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input id="subject" name="subject" value={formData.subject} onChange={handleChange} data-testid="test-contact-subject" aria-describedby={errors.subject ? 'subject-error' : undefined} />
          {errors.subject && <p id="subject-error" data-testid="test-contact-error-subject" className="error">{errors.subject}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} data-testid="test-contact-message" aria-describedby={errors.message ? 'message-error' : undefined}></textarea>
          {errors.message && <p id="message-error" data-testid="test-contact-error-message" className="error">{errors.message}</p>}
        </div>

        <button type="submit" data-testid="test-contact-submit">Submit</button>
        {success && <p data-testid="test-contact-success" className="success">Message sent successfully!</p>}
      </form>
    </main>
  )
}
