<?php

namespace calderawp\CalderaPluginBoilerPlate\Tests\Unit;

use calderawp\CalderaPluginBoilerPlate\Plugin;

class PluginTest extends TestCase
{

	/**
	 * @covers \calderawp\CalderaPluginBoilerPlate\Plugin::sayHi
	 */
	public function testSayHi()
	{
		$this->assertEquals('Hi Roy', (new Plugin())->sayHi());
	}
}
