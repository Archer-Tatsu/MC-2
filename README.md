# MC-2
www.buaamc2.net

目前共有三个分支，均可运行，网站最新为django分支

master：纯静态页面网站【2020.5停止更新维护】

express：使用express(node.js)+ xx.ini文件，实现动态查询、文件式数据库、pm2运行【2021.2停止更新维护】

(旧版)django：使用nginx+django+ xx.ini文件，动态查询、灵活静态文件服务器、便于部署和迁移，supervisor后台监控运行（推荐）/uwsgi反代部署
django: 在原django分支基础上迭代更新为使用单一db.sqilte3文件式数据库管理所有数据替换ini文件，通过数据库可视化软件方便增删查改，且数据库同样不需要安装部署，随粘随用
