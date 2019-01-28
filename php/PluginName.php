<?php


namespace calderawp\CalderaPluginBoilerPlate;

use calderawp\CalderaPluginBoilerPlate\Contracts\PluginNameContract;

final class PluginName implements PluginNameContract
{


	public function sayHi()
	{
		return 'Hi Roy';
	}
}
