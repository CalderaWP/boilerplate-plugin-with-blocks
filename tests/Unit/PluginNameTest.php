<?php

namespace calderawp\CalderaPluginBoilerPlate\Tests\Unit;

use calderawp\CalderaPluginBoilerPlate\PluginName;

class PluginNameTest extends TestCase
{

	public function testSayHi()
	{
		$this->assertEquals('Hi Roy', (new PluginName())->sayHi());
	}
}
