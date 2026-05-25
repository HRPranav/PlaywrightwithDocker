pipeline {
    agent any
    
    tools {
        // Must match the name configured in Manage Jenkins -> Global Tool Configuration
        nodejs "NodeJS 18" 
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                // Essential: Installs the required chromium/firefox browsers and OS dependencies on the server
                sh 'npx playwright install --with-deps'
            }
        }
        
        stage('Execute Automation') {
            steps {
                sh 'npm run test'
            }
        }
    }
    
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
