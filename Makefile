# all: update deploy
#
# deploy:
# 	rm -rf public db.json
# 	hexo generate
# 	hexo deploy
#
# update:
# 	cd ../vue && \
# 		git checkout -- dist && \
# 		git checkout dev && \
# 		npm run build
# 	cp ../vue/dist/vue.min.js themes/component-io/source/js/vue.min.js
# 	cp ../vue/dist/vue.js themes/component-io/source/js/vue.js
# 	node update.js
