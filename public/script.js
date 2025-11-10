document.addEventListener('DOMContentLoaded', () => {
            
            // --- Lógica del Header Pegajoso (Sticky Header) ---
            const header = document.getElementById('main-header');
            const onScroll = () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            };
            window.addEventListener('scroll', onScroll);
            onScroll(); // Ejecutar al cargar por si la página está recargada a medio scroll

            // --- Lógica del Menú Móvil ---
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = mobileMenu.querySelectorAll('a');

            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Ocultar menú al hacer clic en un enlace (para SPAs)
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            // --- Lógica de la Galería Creativa (Efecto de Foco) ---
            const galleryContainer = document.getElementById('gallery-container');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            if (galleryContainer) {
                const updateFocus = () => {
                    // Obtenemos el centro del viewport del contenedor
                    const containerRect = galleryContainer.getBoundingClientRect();
                    const containerCenter = containerRect.left + containerRect.width / 2;
                    
                    let minDiff = Infinity;
                    let focusedItem = null;

                    galleryItems.forEach(item => {
                        const itemRect = item.getBoundingClientRect();
                        const itemCenter = itemRect.left + itemRect.width / 2;
                        
                        // Calculamos la diferencia (distancia) del centro del item al centro del contenedor
                        const diff = Math.abs(containerCenter - itemCenter);
                        
                        if (diff < minDiff) {
                            minDiff = diff;
                            focusedItem = item;
                        }
                        
                        // Reseteamos todos los items
                        item.classList.remove('focused');
                    });
                    
                    // Aplicamos la clase 'focused' solo al más cercano
                    if (focusedItem) {
                        focusedItem.classList.add('focused');
                    }
                };

                // Actualizar al cargar y al hacer scroll
                galleryContainer.addEventListener('scroll', updateFocus);
                updateFocus(); // Llamada inicial
            }

        });