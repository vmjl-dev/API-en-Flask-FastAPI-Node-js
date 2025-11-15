(function(){
      const toc=document.getElementById('toc-list');
      const sections=document.querySelectorAll('article.content section[id]');
      sections.forEach(sec=>{
        const title=sec.querySelector('h3').textContent;
        const li=document.createElement('li');
        const a=document.createElement('a');
        a.href='#'+sec.id;
        a.textContent=title;
        a.addEventListener('click',e=>{
          e.preventDefault();
          document.getElementById(sec.id).scrollIntoView({behavior:'smooth'});
        });
        li.appendChild(a);
        toc.appendChild(li);
      });
    })();