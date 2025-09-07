
/* script.js - manejos simples para el modal de compra y el formulario */
document.addEventListener('DOMContentLoaded', function(){
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.querySelector('.modal-close');

  function openModal(html){
    modalBody.innerHTML = html;
    modal.setAttribute('aria-hidden', 'false');
  }
  function closeModal(){
    modal.setAttribute('aria-hidden', 'true');
    modalBody.innerHTML = '';
  }
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e){
    if(e.target === modal) closeModal();
  });

  document.querySelectorAll('.btn.buy').forEach(btn => {
    btn.addEventListener('click', function(){
      const event = JSON.parse(btn.getAttribute('data-event'));
      const html = `
        <h3>Comprar: ${event.title}</h3>
        <p>Precio: <strong>${event.price}</strong></p>
        <p><strong>Proceso seguro:</strong> El pago se debe realizar antes de recibir las boletas. Tras el pago hacemos un checking y la transferencia de la boleta se realiza en 24-48 horas al correo registrado.</p>
        <p>Contacta por WhatsApp para finalizar la compra:</p>
        <p><a class="btn primary" href="https://wa.me/573117312218?text=Hola%20quiero%20comprar%20${encodeURIComponent(event.title)}%20-%20precio%20${encodeURIComponent(event.price)}" target="_blank">Escribir por WhatsApp</a></p>
        
      `;
      openModal(html);
    });
  });

  // Contact form - simple demo: open WhatsApp prefilled with message
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const data = new FormData(form);
    const name = encodeURIComponent(data.get('name'));
    const email = encodeURIComponent(data.get('email'));
    const message = encodeURIComponent(data.get('message'));
    const text = `Hola%20soy%20${name}%20(${email})%20-%20${message}`;
    window.open('https://wa.me/573117312218?text=' + text, '_blank');
  });
});
