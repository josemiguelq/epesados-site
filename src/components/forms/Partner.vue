<template>
    <form class="form-wrap" action="#">
        <h4 class="text-white pb-20">Request a Quote</h4>
        <div class="form-select" id="service-select">
            <select>
                <option value="1">Select Service</option>
                <option value="2">Service One</option>
                <option value="3">Service Two</option>
                <option value="4">Service Three</option>
                <option value="5">Service Four</option>
            </select>
        </div>
        <input type="text" class="form-control" placeholder="name">
        <input type="phone" class="form-control" placeholder="Phone Number">
        <input type="email" class="form-control" placeholder="Email Address">
        <textarea name="message" id="" cols="30" rows="5" placeholder="Message"
                  class="form-control"></textarea>
        <button class="primary-btn">Request Free Quote</button>
    </form>
</template>

<script>
    export default {
        name: "Partner"
    }
</script>

<style scoped>

</style>
