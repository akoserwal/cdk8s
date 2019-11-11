import { App, Construct } from '@aws-cdk/core';
import { Chart } from '../../lib';
import { WebService } from './web-service';

class MyChart extends Chart {
  constructor(scope: Construct, ns: string) {
    super(scope, ns);

    new WebService(this, 'hello', {
      image: 'paulbouwer/hello-kubernetes:1.5',
      replicas: 2
    });

    new WebService(this, 'ghost', {
      image: 'ghost',
      containerPort: 2368,
    });
  }
}

const app = new App({ outdir: 'cdk.out' });
new MyChart(app, 'web-service-example');
app.synth();