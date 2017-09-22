<template>
    <div>
        <div class="container">
        <div class="row">
                <div class="col-md-6">
                    <div class="card" style="width: 20rem;">
                        <div class="card-body">
                            <h4 class="card-title">{{ $t('index.heading') }} deveo</h4>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <span>{{ date | moment("from", "now") }}</span>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card" style="width: 20rem;">
                        <div class="card-body">
                            <h4 class="card-title">{{ $t('index.chooseLang') }}</h4>
                            <select v-model="$i18n.locale">
                                <option v-for="(locale, index) in locales">{{index}}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          date: '2016-01-08T00:00:00-06:00',
          locales: this.$i18n.messages
        }
      }
    }
</script>
