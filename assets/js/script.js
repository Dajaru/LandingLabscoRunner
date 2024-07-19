document.addEventListener('DOMContentLoaded', function () {
    const steps = document.querySelectorAll('.step');
    const stepProgress = document.getElementById('step-progress');

    function updateProgress() {
        const activeStep = document.querySelector('.step.active');
        const activeIndex = Array.from(steps).indexOf(activeStep);
        const totalSteps = steps.length - 1;
        const progressPercent = activeIndex === totalSteps ? (totalSteps / totalSteps) * 130 : ((activeIndex + 1) / steps.length) * 130;
        stepProgress.style.width = `${progressPercent}%`;

        steps.forEach((s, i) => {
            if (i < activeIndex) {
                s.classList.add('completed');
                s.classList.remove('active');
            } else if (i === activeIndex) {
                s.classList.add('active');
                s.classList.remove('completed');
            } else {
                s.classList.remove('completed', 'active');
            }
        });

        document.querySelectorAll('.step-number').forEach((s, i) => {
            if (i < activeIndex) {
                s.classList.add('completed');
                s.classList.remove('active');
            } else if (i === activeIndex) {
                s.classList.add('active');
                s.classList.remove('completed');
            } else {
                s.classList.remove('completed', 'active');
            }
        });
    }

    document.querySelectorAll('.next-step').forEach(button => {
        button.addEventListener('click', () => {
            const currentStep = document.querySelector('.step.active');
            const nextStep = currentStep.nextElementSibling;
            if (nextStep) {
                currentStep.classList.remove('active');
                nextStep.classList.add('active');
                updateProgress();
            }
        });
    });

    document.querySelectorAll('.prev-step').forEach(button => {
        button.addEventListener('click', () => {
            const currentStep = document.querySelector('.step.active');
            const prevStep = currentStep.previousElementSibling;
            if (prevStep) {
                currentStep.classList.remove('active');
                prevStep.classList.add('active');
                updateProgress();
            }
        });
    });

    updateProgress(); // Initial update
});