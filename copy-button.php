<?php
/**
 * Copy button
 */

$value = $args['value'] ?? false;
?>

<button class="copy-button" data-value="<?php echo $value; ?>">
    <?php the_svg_icon( 'copy' ); ?>
</button>