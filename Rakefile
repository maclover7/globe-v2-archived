require 'rake'

namespace :app do
  task :run do
    EMBER_PID = Process.spawn("cd ember && ./node_modules/.bin/ember serve --port=4200")

    trap "INT" do
      puts 'Terminating Ember process...'
      Process.kill('SIGINT', EMBER_PID)
      puts 'All processes terminated!'
      exit 0
    end

    loop do
      sleep 1
    end
  end

  task :test do
    # Ember tests
    puts 'Testing Ember...'
    system "cd ember && ember test"
  end
end
