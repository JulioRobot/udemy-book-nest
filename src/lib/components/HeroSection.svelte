<script lang="ts">
    import heroImage from '$assets/hero.png';
    import {Button} from '$components';
</script>

<section class="default-margin hero">
    <div class="hero-text">
        <h1>Welcome to Book Nest</h1>
        <h3>Your ultimate book management solution</h3>
        <h4 class="mt-1">
            Create your very own digital library where you can keep track of every
            book you own, read and love.
        </h4>
        <h4 class="mb-s">
            Our app offers a beautifully designed, easy-to-use interface that makes
            managing your book collection a joy
        </h4>
       
    </div>
    <!-- svelte-ignore a11y_img_redundant_alt -->
    <img class="hero-image" src={heroImage} alt="Hero Image" />
</section>

<style>
    .hero {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 100px;
        margin-bottom: 80px;
    }

    .hero-image {
        width: 40%;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 55%;
        padding-right: 50px;
    }
</style>