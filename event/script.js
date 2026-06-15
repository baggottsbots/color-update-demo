/* ===== TICKET PURCHASE HANDLER ===== */
    document.getElementById('buy').addEventListener('click',function(){
      var name=document.getElementById('name').value||'';
      var email=document.getElementById('email').value||'';
      window.__processPayment({amountCents:29900,email:email,productName:'NetHub2026 Conference Ticket',productDescription:'Admission to NetHub2026',name:name,quantity:1});
    });