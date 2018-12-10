Vagrant.configure("2") do |config|
	# Ubuntu VBox
	config.vm.box = "generic/ubuntu1804"
	# open port for Node.js
	config.vm.network "forwarded_port", guest: 3001, host: 3001   # Node.js
	# create a private network with static IP.
	config.vm.network "private_network", ip: "192.168.42.14"
	# set up a synced folder
	config.vm.synced_folder ".", "/var/www"
	# provision VM = file is kept separate for use on upstream server
	config.vm.provision :shell, :path => "provision.sh"
end
